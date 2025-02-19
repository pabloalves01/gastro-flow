import { Plus } from "lucide-react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import SectionText from "../../components/text/section-text";
import { Alert, AlertActions, AlertDescription } from "../../components/ui/catalyst/alert";
import { Description, Field, Label } from "../../components/ui/catalyst/fieldset";
import { Button } from "../../components/ui/catalyst/button";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/catalyst/input";
import axios from "axios";

export default function ManageCategories() {
    const [openModalAddCard, setIsOpenModalAddCard] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [categoryColor, setCategoryColor] = useState("#FF9800");
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
            const response = await axios.post("http://localhost:5000/api/categories", {
                name: categoryName,
                description: categoryDescription,
                color: categoryColor,
            });
        } catch (error) {
            console.error("❌ Erro ao criar categoria:", error);
        }
    };

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} buttons={bredcrumbButtons} />
            <SectionText title="Gerenciar Categorias" subtitle="Gerencie suas categorias, crie novas ou edite." />
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
        </div>
    )
}