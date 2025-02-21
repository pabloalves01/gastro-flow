import { Cog, Inbox, Plus } from "lucide-react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb"
import SectionText from "../../components/text/section-text"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/catalyst/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../../components/ui/catalyst/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

export default function ManageContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Cadastros", href: "/cadastros" },
        { label: "Gerenciar Contatos", href: "/cliente/gerenciar" },
    ];
    const bredcrumbButtons = [
        {
            label: "Novo Contato",
            // onClick: () => setIsOpenModalAddCard(true),
            href: "/cliente/novo",
            icon: <Plus />
        },
    ];

    interface Contact {
        id: number;
        corporate_name: string;
        trade_name: string;
        contact_type: string;
        cnpj?: string;
        cpf?: string;
        email: string;
        taxpayer: string;
        city: string;
        active: boolean;
    }

    const getContacts = async () => {
        try {
            const response = await axios.get("/api/contacts");
            setContacts(response.data);
            console.log("Contatos:", response.data);
        } catch (error) {
            console.error("Erro ao obter contatos:", error);
        }
    }

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div>
            <Breadcrumb
                items={breadcrumbItems}
            // buttons={bredcrumbButtons}
            />
            <div className="flex items-center justify-between">
                <div className="pb-4">
                    <SectionText title="Gerenciar Contatos" subtitle="Gerencie seus contatos, crie novos ou edite." />
                </div>
                <div className="group">
                    <Cog
                        // onClick={() => setIsOpenFilterModal(true)}
                        className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
                        strokeWidth={1}
                    />
                </div>
            </div>
            <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
                <TableHead>
                    <TableRow>
                        {/* <TableHeader>ID</TableHeader> */}
                        <TableHeader>Razão Social</TableHeader>
                        <TableHeader>Nome Fantasia</TableHeader>
                        <TableHeader>Tipo</TableHeader>
                        <TableHeader>CPF/CNPJ</TableHeader>
                        {/* <TableHeader>CNPJ</TableHeader> */}
                        {/* <TableHeader>E-mail</TableHeader> */}
                        {/* <TableHeader>Contribuinte</TableHeader> */}
                        <TableHeader>Cidade</TableHeader>
                        <TableHeader>Ativo</TableHeader>
                        <TableHeader>Ações</TableHeader>
                        {/* <TableHeader>Bairro</TableHeader> */}
                        {/* <TableHeader>Endereço</TableHeader> */}

                    </TableRow>
                </TableHead>
                <TableBody>

                    {contacts.map((contact, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{contact.corporate_name}</TableCell>
                            <TableCell className="font-medium">{contact.trade_name}</TableCell>
                            <TableCell className="font-medium">{contact.contact_type}</TableCell>
                            {contact.cnpj ?
                                <TableCell className="font-medium">{contact.cnpj}</TableCell>
                                :
                                <TableCell className="font-medium">{contact.cpf}</TableCell>}
                            <TableCell className="font-medium">{contact.city}</TableCell>
                            {contact.active === true ?
                                <TableCell className="font-medium">
                                    <div className="bg-green-500 rounded-full h-3 w-3"></div>
                                </TableCell>
                                :
                                <TableCell className="font-medium">
                                    <div className="bg-red-500 rounded-full h-3 w-3"></div>

                                </TableCell>
                            }
                            <TableCell>
                                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                                    <Dropdown>
                                        <DropdownButton plain aria-label="More options">
                                            <EllipsisHorizontalIcon />
                                        </DropdownButton>
                                        <DropdownMenu anchor="bottom end">
                                            <DropdownItem>Visualizar</DropdownItem>
                                            <DropdownItem>Editar</DropdownItem>
                                            {/* <DropdownItem onClick={() => handleCategory(category)} >Deletar</DropdownItem> */}
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}