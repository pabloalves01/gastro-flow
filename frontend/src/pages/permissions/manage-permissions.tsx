import { useState } from "react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import SectionText from "../../components/text/section-text";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/catalyst/table";
import { Badge } from "../../components/ui/catalyst/badge";
import { Button } from "../../components/ui/catalyst/button";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/ui/catalyst/alert";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../../components/ui/catalyst/dropdown";
import { Cog, Plus, Shield } from "lucide-react";
import { Field, Label, Description } from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Select } from "../../components/ui/catalyst/select";
import { Checkbox } from "../../components/ui/catalyst/checkbox";

interface ModuleComponent {
    id: string;
    name: string;
    description: string;
}

interface ModulePermission {
    id: string;
    name: string;
    components: {
        [key: string]: boolean;
    };
    actions: {
        canCreate: boolean;
        canRead: boolean;
        canUpdate: boolean;
        canDelete: boolean;
    };
}

interface Permission {
    id: number;
    role: string;
    modules: ModulePermission[];
}

export default function ManagePermissions() {
    const moduleComponents: { [key: string]: ModuleComponent[] } = {
        orders: [
            { id: "total-cards", name: "Total Cards", description: "Cards showing order totals" },
            { id: "order-history", name: "Order History", description: "Complete order history" },
            { id: "financial-data", name: "Financial Data", description: "Order financial information" }
        ],
        products: [
            { id: "inventory", name: "Inventory", description: "Product inventory management" },
            { id: "pricing", name: "Pricing", description: "Product pricing information" }
        ],
        users: [
            { id: "user-management", name: "User Management", description: "User management section" },
            { id: "roles", name: "Roles", description: "User roles and permissions" }
        ]
    };

    const [permissions, setPermissions] = useState<Permission[]>([
        {
            id: 1,
            role: "Administrador",
            modules: [
                {
                    id: "orders",
                    name: "Pedidos",
                    components: {
                        "total-cards": true,
                        "order-history": true,
                        "financial-data": true
                    },
                    actions: {
                        canCreate: true,
                        canRead: true,
                        canUpdate: true,
                        canDelete: true
                    }
                }
            ]
        },
        {
            id: 2,
            role: "Gerente",
            modules: [
                {
                    id: "orders",
                    name: "Pedidos",
                    components: {
                        "total-cards": true,
                        "order-history": true,
                        "financial-data": false
                    },
                    actions: {
                        canCreate: true,
                        canRead: true,
                        canUpdate: true,
                        canDelete: false
                    }
                }
            ]
        },
        {
            id: 3,
            role: "Vendedor",
            modules: [
                {
                    id: "orders",
                    name: "Pedidos",
                    components: {
                        "total-cards": false,
                        "order-history": true,
                        "financial-data": false
                    },
                    actions: {
                        canCreate: true,
                        canRead: true,
                        canUpdate: false,
                        canDelete: false
                    }
                }
            ]
        }
    ]);

    const [selectedRole, setSelectedRole] = useState<string>("");
    const [selectedModule, setSelectedModule] = useState<string>("");
    const [isOpenNewPermission, setIsOpenNewPermission] = useState(false);
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Configurações", href: "/configuracoes" },
        { label: "Permissões", href: "/configuracoes/permissoes" },
    ];

    const breadcrumbButtons = [
        {
            label: "Nova Permissão",
            onClick: () => setIsOpenNewPermission(true),
            icon: <Plus />,
        },
    ];

    const handleSaveNewPermission = () => {
        // Implementation for saving new permission
        setIsOpenNewPermission(false);
    };

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} buttons={breadcrumbButtons} />
            <div className="flex items-center justify-between">
                <div className="pb-4">
                    <SectionText
                        title="Gerenciar Permissões"
                        subtitle="Configure as permissões de acesso aos módulos e componentes do sistema"
                    />
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
                        <TableHeader>Perfil</TableHeader>
                        <TableHeader>Módulo</TableHeader>
                        <TableHeader>Componentes Visíveis</TableHeader>
                        <TableHeader>Criar</TableHeader>
                        <TableHeader>Visualizar</TableHeader>
                        <TableHeader>Editar</TableHeader>
                        <TableHeader>Deletar</TableHeader>
                        <TableHeader>Ações</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {permissions.map((permission) =>
                        permission.modules.map((module) => (
                            <TableRow key={`${permission.id}-${module.id}`}>
                                <TableCell className="font-medium">{permission.role}</TableCell>
                                <TableCell className="font-medium">{module.name}</TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {Object.entries(module.components).map(([key, value]) => (
                                            <Badge key={key} color={value ? "green" : "red"}>
                                                {moduleComponents[module.id]?.find(c => c.id === key)?.name || key}
                                            </Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge color={module.actions.canCreate ? "green" : "red"}>
                                        {module.actions.canCreate ? "Sim" : "Não"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge color={module.actions.canRead ? "green" : "red"}>
                                        {module.actions.canRead ? "Sim" : "Não"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge color={module.actions.canUpdate ? "green" : "red"}>
                                        {module.actions.canUpdate ? "Sim" : "Não"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge color={module.actions.canDelete ? "green" : "red"}>
                                        {module.actions.canDelete ? "Sim" : "Não"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                                        <Dropdown>
                                            <DropdownButton plain aria-label="More options">
                                                <Cog className="w-4 h-4" />
                                            </DropdownButton>
                                            <DropdownMenu anchor="bottom end">
                                                <DropdownItem>Visualizar</DropdownItem>
                                                <DropdownItem>Editar</DropdownItem>
                                                <DropdownItem>Deletar</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>

            <Alert open={isOpenNewPermission} onClose={() => setIsOpenNewPermission(false)}>
                <AlertTitle>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Nova Permissão
                    </div>
                </AlertTitle>
                <AlertDescription>
                    <div className="space-y-4">
                        <Field>
                            <Label>Perfil</Label>
                            <Description>Selecione o perfil de usuário</Description>
                            <Select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                                <option value="" disabled>Selecione um perfil</option>
                                <option value="admin">Administrador</option>
                                <option value="manager">Gerente</option>
                                <option value="seller">Vendedor</option>
                            </Select>
                        </Field>

                        <Field>
                            <Label>Módulo</Label>
                            <Description>Selecione o módulo para configurar as permissões</Description>
                            <Select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                                <option value="" disabled>Selecione um módulo</option>
                                <option value="orders">Pedidos</option>
                                <option value="products">Produtos</option>
                                <option value="users">Usuários</option>
                            </Select>
                        </Field>

                        {selectedModule && moduleComponents[selectedModule] && (
                            <Field>
                                <Label>Componentes Visíveis</Label>
                                <Description>Selecione os componentes que este perfil poderá visualizar</Description>
                                <div className="space-y-2">
                                    {moduleComponents[selectedModule].map((component) => (
                                        <div key={component.id} className="flex items-center gap-2">
                                            <Checkbox id={component.id} />
                                            <Label htmlFor={component.id}>{component.name}</Label>
                                        </div>
                                    ))}
                                </div>
                            </Field>
                        )}

                        <Field>
                            <Label>Ações Permitidas</Label>
                            <Description>Selecione as ações que este perfil poderá realizar</Description>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="canCreate" />
                                    <Label htmlFor="canCreate">Criar</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="canRead" />
                                    <Label htmlFor="canRead">Visualizar</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="canUpdate" />
                                    <Label htmlFor="canUpdate">Editar</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="canDelete" />
                                    <Label htmlFor="canDelete">Deletar</Label>
                                </div>
                            </div>
                        </Field>
                    </div>
                </AlertDescription>
                <AlertActions>
                    <Button plain onClick={() => setIsOpenNewPermission(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleSaveNewPermission}>Salvar</Button>
                </AlertActions>
            </Alert>

            <Alert open={isOpenFilterModal} onClose={setIsOpenFilterModal}>
                <AlertTitle>Aplicar Filtros</AlertTitle>
                <AlertDescription>
                    Os filtros serão aplicados para exibir apenas as permissões que atendem aos
                    critérios selecionados.
                </AlertDescription>
                <AlertActions>
                    <Button plain onClick={() => setIsOpenFilterModal(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={() => setIsOpenFilterModal(false)}>Buscar</Button>
                </AlertActions>
            </Alert>
        </div>
    );
}