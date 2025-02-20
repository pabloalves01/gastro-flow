import { Cog, Inbox, Plus } from "lucide-react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import SectionText from "../../components/text/section-text";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/ui/catalyst/alert";
import { Description, Field, Label } from "../../components/ui/catalyst/fieldset";
import { Button } from "../../components/ui/catalyst/button";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/catalyst/input";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/catalyst/table";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../../components/ui/catalyst/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import { Pagination, PaginationGap, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from "../../components/ui/catalyst/pagination";

export default function ManageCategories() {
    // New Category
    const [openModalAddCard, setIsOpenModalAddCard] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [categoryColor, setCategoryColor] = useState("#FF9800");
    // Modal
    const [openFilterModal, setIsOpenFilterModal] = useState(false);
    // Categories
    type Category = {
        id: number;
        name: string;
        description: string;
        color: string;
    };
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const handleCategory = (category: Category) => {
        setSelectedCategory(category);
        destroyCategory(category.id);
    };


    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Categorias", href: "/categorias" },
        { label: "Gerenciar Categorias", href: "/categorias/gerenciar" },
    ];
    const bredcrumbButtons = [
        {
            label: "Nova Categoria",
            onClick: () => setIsOpenModalAddCard(true),
            icon: <Plus />
        },
    ];
    const createCategory = async () => {
        try {
            await axios.post("/api/categories", {
                name: categoryName,
                description: categoryDescription,
                color: categoryColor,
            });
            setIsOpenModalAddCard(false);
            setCategoryName("");
            setCategoryDescription("");
            setCategoryColor("#FF9800");
        } catch (error) {
            console.error("Erro ao criar categoria:", error);
        }
    };

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getCategories()
    }, [categoryName])

    const getCategories = async () => {
        try {
            const response = await axios.get('/api/categories')
            setCategories(response.data)
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    const destroyCategory = async (id: number) => {
        try {
            await axios.delete(`/api/categories/${id}`);
            console.log(`Categoria ${id} excluída`);
            getCategories();
        } catch (error) {
            console.error("Erro ao deletar categoria:", error);
        }
    };

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} buttons={bredcrumbButtons} />
            <div className="flex items-center justify-between">
                <div className="pb-4">
                    <SectionText title="Gerenciar Categorias" subtitle="Gerencie suas categorias, crie novas ou edite." />
                </div>
                <div className="group">
                    <Cog
                        onClick={() => setIsOpenFilterModal(true)}
                        className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
                        strokeWidth={1}
                    />
                </div>
            </div>
            <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
                <TableHead>
                    <TableRow>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader>Cor</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="py-24 text-center text-[#A1A1A1]"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <Inbox className="w-14 h-14" />
                                    <div className="text-lg font-semibold">
                                        Nenhum resultado encontrado
                                    </div>
                                    <p className="text-sm text-center">
                                        Você pode configurar as opções no menu acima clicando em
                                        <i className="inline-flex items-center">
                                            <Cog className="w-4 h-4 mx-1" />
                                        </i>
                                        no menu acima.
                                    </p>
                                </div>
                            </TableCell>
                        </TableRow>
                    ) : (
                        categories.map((category, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{category.id}</TableCell>
                                <TableCell className="font-medium">{category.name}</TableCell>
                                <TableCell>
                                    {category.description.length > 0 ? (
                                        category.description
                                    ) : (
                                        <div className="text-zinc-500">
                                            Sem descrição.
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell className="text-zinc-500">
                                    <div className="rounded-full h-2 w-6" style={{ backgroundColor: category.color }}></div>
                                </TableCell>
                                <TableCell>
                                    <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                                        <Dropdown>
                                            <DropdownButton plain aria-label="More options">
                                                <EllipsisHorizontalIcon />
                                            </DropdownButton>
                                            <DropdownMenu anchor="bottom end">
                                                <DropdownItem>Visualizar</DropdownItem>
                                                <DropdownItem>Editar</DropdownItem>
                                                <DropdownItem onClick={() => handleCategory(category)} >Deletar</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <Pagination className="flex w-full justify-center mt-6">
                <PaginationPrevious href="?page=2" />
                <PaginationList>
                    <PaginationPage href="?page=1">1</PaginationPage>
                    <PaginationPage href="?page=2">2</PaginationPage>
                    <PaginationPage href="?page=3" current>
                        3
                    </PaginationPage>
                    <PaginationPage href="?page=4">4</PaginationPage>
                    <PaginationGap />
                    <PaginationPage href="?page=65">65</PaginationPage>
                    <PaginationPage href="?page=66">66</PaginationPage>
                </PaginationList>
                <PaginationNext href="?page=4" />
            </Pagination>
            <Alert open={openModalAddCard} onClose={() => setIsOpenModalAddCard(false)}>
                <AlertDescription>
                    <Field>
                        <Label>Nome da Categoria</Label>
                        <Description>
                            Nome principal para identificação da categoria
                        </Description>
                        <Input
                            name="category_name"
                            placeholder="Digite o nome da categoria"
                            required
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </Field>
                    <Field className="mt-4">
                        <Label>Descrição</Label>
                        <Description>
                            Breve descrição sobre a categoria (opcional)
                        </Description>
                        <Input
                            name="category_description"
                            placeholder="Digite uma descrição para a categoria"
                            value={categoryDescription}
                            onChange={(e) => setCategoryDescription(e.target.value)}
                            autoComplete="off"
                        />
                    </Field>
                    <Field className="mt-4">
                        <Label>Cor</Label>
                        <Description>
                            Selecione uma cor para identificar a categoria
                        </Description>
                        <Input
                            type="color"
                            name="category_color"
                            className=""
                            defaultValue="#FF9800"
                            value={categoryColor}
                            onChange={(e) => setCategoryColor(e.target.value)}
                        />
                    </Field>
                </AlertDescription>
                <AlertActions>
                    <Button onClick={() => setIsOpenModalAddCard(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={createCategory} type="submit">
                        Nova Categoria
                    </Button>
                </AlertActions>
            </Alert>
            <Alert open={openFilterModal} onClose={setIsOpenFilterModal}>
                <AlertTitle>Aplicar Filtros</AlertTitle>
                <AlertDescription>
                    Os filtros serão aplicados para exibir apenas os pedidos que atendem
                    aos critérios selecionados.
                </AlertDescription>
                <AlertActions>
                    <Button plain onClick={() => setIsOpenFilterModal(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={() => setIsOpenFilterModal(false)}>Buscar</Button>
                </AlertActions>
            </Alert>

        </div>
    )
}