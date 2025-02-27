import { BookText, Cog, Inbox, Info, MapPinHouse, Plus } from "lucide-react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import SectionText from "../../components/text/section-text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/catalyst/table";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../../components/ui/catalyst/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "../../components/ui/catalyst/dialog";
// import { Field, Label } from "../../components/ui/catalyst/fieldset";
// import { Input } from "../../components/ui/catalyst/input";
import { Button } from "../../components/ui/catalyst/button";
import { Divider } from "../../components/ui/catalyst/divider";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/ui/catalyst/alert";

export default function ManageContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [viewContatModal, setIsViewContactModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [selectedContactToDisable, setSelectedContactToDisable] = useState<Contact | null>(null);
  const [disableContactModal, setIsDisableContactModal] = useState(false);
  const [openFilters, setIsOpenFilters] = useState(false);
  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Cadastros", href: "/cadastros" },
    { label: "Gerenciar Contatos", href: "/cliente/gerenciar" },
  ];
  const bredcrumbButtons = [
    {
      label: "Novo Contato",
      href: "/cliente/novo",
      icon: <Plus />,
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
    complement?: string;
    address: string;
    neighborhood: string;
    state_id: string;
    delivery_address?: string;
    website: string;
    state_registration: string;
    municipal_registration: string;
    state: {
      id: number;
      name: string;
      initials: string
    }
  }

  const handleContactView = (contact: Contact) => {
    console.log("Contato selecionado:", contact);
    setSelectedContact(contact);
    setIsViewContactModal(true);
  };

  const confirmContactChangeActive = (contact: Contact) => {
    console.log("Inativar contato:", contact);
    setSelectedContactToDisable(contact);
    setIsDisableContactModal(true);
  }

  const handleDisableContact = async () => {
    try {
      const response = await axios.put(`/api/contacts/${selectedContactToDisable?.id}/disable`, {
        active: false
      });
      console.log("Contato inativado:", response.data);
      setIsDisableContactModal(false);
      getContacts();
    } catch (error) {
      console.error("Erro ao inativar contato:", error);
    }
  }

  const getContacts = async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Erro ao obter contatos:", error);
    }
  };

  useEffect(() => {
    getContacts();
    console.log("Contatos:", contacts);
  }, []);

  return (
    <div>
      <Breadcrumb
        items={breadcrumbItems}
        buttons={bredcrumbButtons}
      />
      <div className="flex items-center justify-between">
        <div className="pb-4">
          <SectionText
            title="Gerenciar Contatos"
            subtitle="Gerencie seus contatos, crie novos ou edite."
          />
        </div>
        <div className="group">
          <Cog
            className="text-white w-6 h-6 cursor-pointer hover:text-zinc-500 group-hover:animate-[spin_2s_linear_infinite]"
            strokeWidth={1}
            onClick={() => setIsOpenFilters(!openFilters)}
          />
        </div>
      </div>
      {openFilters && (
        <div className="py-4 bg-zinc-800 rounded-lg">
          .
        </div>
      )}
      <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Razão Social</TableHeader>
            <TableHeader>Nome Fantasia</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>CPF/CNPJ</TableHeader>
            <TableHeader>Cidade</TableHeader>
            <TableHeader>Ativo</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {contact.corporate_name}
              </TableCell>
              <TableCell className="font-medium">
                {contact.trade_name}
              </TableCell>
              <TableCell className="font-medium">
                {contact.contact_type}
              </TableCell>
              {contact.cnpj ? (
                <TableCell className="font-medium">{contact.cnpj}</TableCell>
              ) : (
                <TableCell className="font-medium">{contact.cpf}</TableCell>
              )}
              <TableCell className="font-medium">{contact.city}</TableCell>
              {contact.active === true ? (
                <TableCell className="font-medium">
                  <div className="bg-green-500 rounded-full h-3 w-3"></div>
                </TableCell>
              ) : (
                <TableCell className="font-medium">
                  <div className="bg-red-500 rounded-full h-3 w-3"></div>
                </TableCell>
              )}
              <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisHorizontalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem onClick={() => handleContactView(contact)}>
                        Visualizar
                      </DropdownItem>
                      <DropdownItem>Editar</DropdownItem>
                      {contact.active === true ? (
                        <DropdownItem onClick={() => confirmContactChangeActive(contact)}>
                          Inativar
                        </DropdownItem>
                      ) : (
                        <DropdownItem onClick={() => confirmContactChangeActive(contact)}>Ativar</DropdownItem>
                      )}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={viewContatModal}
        onClose={() => setIsViewContactModal(false)}
        size="4xl"
      >
        <DialogTitle>
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-lg font-semibold">
              Informações sobre o Contato
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <div
                className={`w-3 h-3 rounded-full ${selectedContact?.active ? "bg-green-500" : "bg-red-500"
                  }`}
              ></div>
              {selectedContact?.active ? "Ativo" : "Inativo"}
            </div>
          </div>
        </DialogTitle>

        <DialogBody className="px-6 py-4 space-y-6">
          {/* Informações Básicas */}
          <div>
            <div className="flex items-center text-gray-400 font-semibold">
              <Info className="mr-2" />
              <h3>Informações Básicas</h3>
            </div>
            <Divider className="my-2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
              <div>
                <span className="text-gray-400">Razão Social</span>
                <p className="font-medium">{selectedContact?.corporate_name}</p>
              </div>
              <div>
                <span className="text-gray-400">Nome Fantasia</span>
                <p className="font-medium">{selectedContact?.trade_name}</p>
              </div>
              <div>
                <span className="text-gray-400">
                  {selectedContact?.cnpj ? "CNPJ" : "CPF"}
                </span>
                <p className="font-medium">
                  {selectedContact?.cnpj || selectedContact?.cpf}
                </p>
              </div>
              <div>
                <span className="text-gray-400">Contribuinte</span>
                <p className="font-medium">
                  {selectedContact?.taxpayer === "yes"
                    ? "Sim"
                    : selectedContact?.taxpayer === "no"
                      ? "Não"
                      : selectedContact?.taxpayer === "exempt"
                        ? "Isento"
                        : "Não informado"}
                </p>
              </div>
              <div>
                <span className="text-gray-400">Tipo de Contato</span>
                <p className="font-medium">{selectedContact?.contact_type}</p>
              </div>
              <div>
                <span className="text-gray-400">E-mail</span>
                <p className="font-medium">{selectedContact?.email}</p>
              </div>
              <div>
                <span className="text-gray-400">Inscrição Estadual</span>
                <p className="font-medium">
                  {selectedContact?.state_registration || "Não informado"}
                </p>
              </div>
              <div>
                <span className="text-gray-400">Inscrição Municipal</span>
                <p className="font-medium">
                  {selectedContact?.municipal_registration || "Não informado"}
                </p>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <div className="flex items-center  text-gray-400 font-semibold">
              <MapPinHouse className="mr-2" />
              <h3>Endereço</h3>
            </div>
            <Divider className="my-2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
              <div>
                <span className="text-gray-400">Endereço</span>
                <p className="font-medium">{selectedContact?.address}</p>
              </div>
              <div>
                <span className="text-gray-400">Endereço de Entrega</span>
                <p className="font-medium">
                  {selectedContact?.delivery_address || "Não informado"}
                </p>
              </div>
              <div>
                <span className="text-gray-400">Complemento</span>
                <p className="font-medium">
                  {selectedContact?.complement || "Não informado"}
                </p>
              </div>
              <div>
                <span className="text-gray-400">Cidade</span>
                <p className="font-medium">{selectedContact?.city}</p>
              </div>
              <div>
                <span className="text-gray-400">Bairro</span>
                <p className="font-medium">{selectedContact?.neighborhood}</p>
              </div>
              <div>
                <span className="text-gray-400">Estado</span>
                <p className="font-medium">{selectedContact?.state.name}</p>
              </div>
            </div>
          </div>

          {/* Informações Complementares */}
          <div>
            <div className="flex items-center  text-gray-400 font-semibold">
              <BookText className="mr-2" />
              <h3>Informações Complementares</h3>
            </div>
            <Divider className="my-2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
              <div>
                <span className="text-gray-400">Website</span>
                <p className="font-medium">
                  {selectedContact?.website || "Não informado"}
                </p>
              </div>
            </div>
          </div>
        </DialogBody>

        <DialogActions className="flex justify-end gap-4 px-6 py-4">
          <Button plain onClick={() => setIsViewContactModal(false)}>
            Fechar
          </Button>
          <Button onClick={() => setIsViewContactModal(false)}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Alert open={disableContactModal} onClose={setIsDisableContactModal}>
        <AlertTitle>Você deseja {selectedContactToDisable?.active ? "inativar" : "ativar"} o contato {selectedContactToDisable?.corporate_name}?</AlertTitle>
        <AlertDescription>
          Essa ação tornará o contato {selectedContactToDisable?.active ? "inativo" : "ativo"}, {selectedContactToDisable?.active ? "impedindo futuras interações" : "permitindo futuras interações"}. Você tem certeza que deseja continuar?
        </AlertDescription>

        <AlertActions>
          <Button plain onClick={() => setIsDisableContactModal(false)}>
            Cancelar
          </Button>
          <Button onClick={() => handleDisableContact()}>Inativar</Button>
        </AlertActions>
      </Alert>

    </div>
  );
}
