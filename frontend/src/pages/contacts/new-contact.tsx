import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/custom/breadcrumbs/breadcrumb";
import Tabs from "../../components/custom/tabs/tabs";
import SectionText from "../../components/text/section-text";
import {
  Description,
  ErrorMessage,
  Field,
  Label,
} from "../../components/ui/catalyst/fieldset";
import { Input } from "../../components/ui/catalyst/input";
import { Select } from "../../components/ui/catalyst/select";
import { Divider } from "../../components/ui/catalyst/divider";
import { Checkbox, CheckboxField } from "../../components/ui/catalyst/checkbox";
import { Button } from "../../components/ui/catalyst/button";

// Hooks
import { useStates } from "../../hooks/common/useStates";
import { useCep } from "../../hooks/api/useCep";
import axios from "axios";

export default function NewCliente() {
  // HOOKS
  const {
    cep,
    // setCep,
    city,
    state,
    loading: loadingCep,
    error: errorCep,
    handleCepChange,
  } = useCep();
  const { states, loading: loadingStates, error: errorStates } = useStates();
  const [selectedState, setSelectedState] = useState("");
  const [activeTab, setActiveTab] = useState("dados gerais");
  const [mostrarEnderecoCobranca, setMostrarEnderecoCobranca] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      zip_code: cep,
      city: city,
      state_id: selectedState,
    }));
  }, [cep, city, selectedState]);

  const [formData, setFormData] = useState({
    corporate_name: "",
    trade_name: "",
    person_type: "",
    taxpayer: "",
    contact_type: "",
    zip_code: "",
    city: "",
    state_id: "",
    address: "",
    neighborhood: "",
    number: "",
    email: "",
    active: true,
  });

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.corporate_name) errors.corporate_name = "Nome é obrigatório";
    if (!formData.trade_name) errors.trade_name = "Nome fantasia é obrigatório";
    if (!formData.person_type) errors.person_type = "Tipo de pessoa é obrigatório";
    if (!formData.taxpayer) errors.taxpayer = "Contribuinte é obrigatório";
    if (!formData.contact_type) errors.contact_type = "Tipo de contato é obrigatório";
    if (!formData.zip_code) errors.zip_code = "CEP é obrigatório";
    if (!formData.city) errors.city = "Cidade é obrigatória";
    if (!formData.state_id) errors.state_id = "Estado é obrigatório";
    if (!formData.address) errors.address = "Endereço é obrigatório";
    if (!formData.neighborhood) errors.neighborhood = "Bairro é obrigatório";
    if (!formData.number) errors.number = "Número é obrigatório";
    if (!formData.email) errors.email = "E-mail é obrigatório";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveFormData = async () => {
    if (!validateForm()) return;
    try {
      const response = await axios.post("/api/contacts", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setMostrarEnderecoCobranca(checked);
  };
  const BreadcrumbItems = [
    { label: "Início", href: "/home" },
    { label: "Cadastros", href: "/cadastros" },
    { label: "Clientes", href: "/cliente/novo" },
  ];
  const clientTabs = [
    { name: "dados gerais", href: "#" },
    { name: "dados complementares", href: "#" },
    { name: "anexos", href: "#" },
    { name: "observações", href: "#" },
  ];
  useEffect(() => {
    if (state && states.length > 0) {
      const matchingState = states.find((s) => s.initials === state);
      if (matchingState) {
        setSelectedState(matchingState.id.toString());
      }
    }
  }, [state, states]);

  return (
    <div>
      <Breadcrumb items={BreadcrumbItems} />
      <SectionText className="mb-4" title="Novo Cliente" />
      <Tabs
        tabs={clientTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-4">
        {activeTab === "dados gerais" && (
          <div>
            <div className="pb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                <Label>Razão Social</Label>
                <Description>
                  Razão Social para exibição e identificação.
                </Description>
                <Input
                  name="corporate_name"
                  placeholder="Nome ou Razão Social do contato"
                  autoComplete="off"
                  value={formData.corporate_name}
                  onChange={handleInputChange}
                  data-invalid={formErrors.corporate_name ? true : undefined}
                />
                {formErrors.corporate_name && (
                  <ErrorMessage>{formErrors.corporate_name}</ErrorMessage>
                )}
              </Field>

              <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                <Label>Fantasia</Label>
                <Description>
                  Nome fantasia para exibição e identificação.
                </Description>
                <Input
                  name="trade_name"
                  autoComplete="off"
                  value={formData.trade_name}
                  onChange={handleInputChange}
                  data-invalid={formErrors.trade_name ? true : undefined}
                />
                {formErrors.trade_name && (
                  <ErrorMessage>{formErrors.trade_name}</ErrorMessage>
                )}
              </Field>
              <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                <Label>Código</Label>
                <Description>Código interno para referência.</Description>
                <Input
                  name="contact_code"
                  type="number"
                  placeholder="Opcional"
                  autoComplete="off"
                  data-invalid={formErrors.contact_code ? true : undefined}
                />
                {formErrors.contact_code && (
                  <ErrorMessage>{formErrors.contact_code}</ErrorMessage>
                )}
              </Field>
              <Field className="col-span-1">
                <Label>Tipo de Pessoa</Label>
                <Description>Pessoa Física ou Júridica.</Description>
                <Select name="person_type" value={formData.person_type} onChange={handleInputChange}>
                  <option value="individual">Pessoa Física</option>
                  <option value="company">Pessoa Jurídica</option>
                </Select>
              </Field>

              {/* CPF ou CNPJ */}
              {formData.person_type === "company" ? (
                <Field className="col-span-2">
                  <Label>CNPJ</Label>
                  <Description>CNPJ da pessoa jurídica.</Description>
                  <Input name="cnpj" placeholder="Opcional" type="number" autoComplete="off" />
                </Field>
              ) : (
                <Field className="col-span-2">
                  <Label>CPF</Label>
                  <Description>CPF da pessoa física.</Description>
                  <Input name="cpf" placeholder="Opcional" type="number" autoComplete="off" />
                </Field>
              )}

              {/* Contribuinte ao lado do CPF/CNPJ */}
              <Field className="col-span-1">
                <Label>Contribuinte</Label>
                <Description>Selecione o tipo de contribuinte.</Description>
                <Select name="taxpayer" value={formData.taxpayer} onChange={handleInputChange}>
                  <option value="" disabled hidden>Selecione um tipo</option>
                  <option value="no">Não Contribuinte</option>
                  <option value="yes">Contribuinte</option>
                  <option value="exempt">Isento</option>
                </Select>
              </Field>
              <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                <Label>Inscrição Estadual</Label>
                <Description>IE do cliente ou fornecedor</Description>
                <Input
                  name="inscricao_estadual"
                  type="number"
                  autoComplete="off"
                />
              </Field>
              <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                <Label>Inscrição Municipal</Label>
                <Description>IM do cliente ou fornecedor</Description>
                <Input
                  name="inscricao_municipal"
                  type="number"
                  autoComplete="off"
                />
              </Field>
              <Field className="col-span-1 sm:col-span-2 lg:col-span-1">
                <Label>Tipo de Contato</Label>
                <Description>Selecione o tipo de contato</Description>
                <Select
                  name="contact_type"
                  value={formData.contact_type}
                  onChange={handleInputChange}
                  data-invalid={formErrors.contact_type ? true : undefined}
                >
                  <option value="" disabled hidden>
                    Selecione um tipo de contato
                  </option>
                  <option value="customer">Cliente</option>
                  <option value="supplier">Fornecedor</option>
                </Select>
                {formErrors.contact_type && (
                  <ErrorMessage>{formErrors.contact_type}</ErrorMessage>
                )}
              </Field>
            </div>
            <Divider className="mt-12 mb-7" />
            <div>
              <SectionText className="py-4" title="Endereço" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>CEP</Label>
                  <Description>CEP do cliente ou fornecedor</Description>
                  <Input
                    name="zip_code"
                    type="text"
                    value={cep}
                    onChange={(e) => handleCepChange(e.target.value)}
                    autoComplete="off"
                    data-invalid={formErrors.zip_code ? true : undefined}
                  />
                  {loadingCep && <span className="mt-1 text-sm font-semibold text-white">Consultando CEP...</span>}
                  {errorCep && <p>{errorCep}</p>}
                  {formErrors.zip_code && (
                    <ErrorMessage>{formErrors.zip_code}</ErrorMessage>
                  )}
                </Field>

                <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                  <Label>Município</Label>
                  <Description>CEP do cliente ou fornecedor</Description>
                  <Input
                    name="city"
                    value={city}
                    readOnly
                    autoComplete="off"
                    data-invalid={formErrors.city ? true : undefined}
                  />
                  {formErrors.city && (
                    <ErrorMessage>{formErrors.city}</ErrorMessage>
                  )}
                </Field>

                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>UF</Label>
                  <Description>UF do cliente ou fornecedor</Description>
                  <Select
                    name="state_id"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    data-invalid={formErrors.state_id ? true : undefined}
                  >
                    <option value="" disabled hidden>
                      Selecione a UF
                    </option>
                    <option value="" disabled hidden>
                      Selecione a UF
                    </option>
                    {loadingStates && <option>Carregando...</option>}
                    {errorStates && <option>{errorStates}</option>}
                    {!loadingStates &&
                      !errorStates &&
                      states.map((states) => (
                        <option key={states.id} value={states.id}>
                          {states.initials} - {states.name}
                        </option>
                      ))}
                  </Select>
                  {formErrors.state_id && (
                    <ErrorMessage>{formErrors.state_id}</ErrorMessage>
                  )}
                </Field>

                <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                  <Label>Endereço</Label>
                  <Description>Endereço do cliente ou fornecedor</Description>
                  <Input
                    name="address"
                    autoComplete="off"
                    value={formData.address}
                    onChange={handleInputChange}
                    data-invalid={formErrors.address ? true : undefined}
                  />
                  {formErrors.address && (
                    <ErrorMessage>{formErrors.address}</ErrorMessage>
                  )}
                </Field>

                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>Bairro</Label>
                  <Description>Bairro do cliente ou fornecedor</Description>
                  <Input
                    name="neighborhood"
                    autoComplete="off"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    data-invalid={formErrors.neighborhood ? true : undefined}
                  />
                  {formErrors.neighborhood && (
                    <ErrorMessage>{formErrors.neighborhood}</ErrorMessage>
                  )}
                </Field>
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>Número</Label>
                  <Description>Número do estabelecimento</Description>
                  <Input
                    name="number"
                    type="number"
                    autoComplete="off"
                    value={formData.number}
                    onChange={handleInputChange}
                    data-invalid={formErrors.number ? true : undefined}
                  />
                  {formErrors.number && (
                    <ErrorMessage>{formErrors.number}</ErrorMessage>
                  )}
                </Field>
                <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                  <Label>Complemento</Label>
                  <Description>Complemento do endereço</Description>
                  <Input
                    name="complemento"
                    autoComplete="off"
                  />
                </Field>
                <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                  <CheckboxField className="mt-6">
                    <Checkbox
                      name="check_endereco_cobranca"
                      checked={mostrarEnderecoCobranca}
                      onChange={handleCheckboxChange}
                    />
                    <Label className="font-semibold">
                      Possui endereço de cobrança diferente do endereço
                      principal.
                    </Label>
                  </CheckboxField>
                </Field>
                {mostrarEnderecoCobranca && (
                  <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                    <Label>Endereoço de Cobrança</Label>
                    <Description>
                      Endereço de cobrança do cliente ou fornecedor
                    </Description>
                    <Input name="enedereco_cobranca" autoComplete="off" />
                  </Field>
                )}
              </div>
            </div>
            <Divider className="mt-12 mb-7" />
            <div>
              <SectionText className="py-4" title="Contato" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>Telefone</Label>
                  <Description>Telefone do cliente ou fornecedor</Description>
                  <Input name="telefone" type="number" autoComplete="off" />
                </Field>
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>Telefone Adicional</Label>
                  <Description>
                    Telefone Adicional do cliente ou fornecedor
                  </Description>
                  <Input
                    name="telefone_adicional"
                    type="number"
                    autoComplete="off"
                  />
                </Field>
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>Celular</Label>
                  <Description>Celular do cliente ou fornecedor</Description>
                  <Input name="celular" type="number" autoComplete="off" />
                </Field>
                <Field></Field>
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>Website</Label>
                  <Description>Website do cliente ou fornecedor</Description>
                  <Input name="website" autoComplete="off" />
                </Field>
                <Field className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <Label>E-mail</Label>
                  <Description>E-mail do cliente ou fornecedor</Description>
                  <Input
                    name="email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleInputChange}
                    data-invalid={formErrors.email ? true : undefined}
                  />
                  {formErrors.email && (
                    <ErrorMessage>{formErrors.email}</ErrorMessage>
                  )}
                </Field>
                <Field className="col-span-1 sm:col-span-2 lg:col-span-2">
                  <Label>E-mail para envio da NFE</Label>
                  <Description>E-mail para enviar a NFE</Description>
                  <Input name="email" autoComplete="off" />
                </Field>
                <Field className="col-span-1 sm:col-span-4 lg:col-span-4">
                  <Label>Observações do Contato</Label>
                  <Description>
                    Observações sobre o cliente ou fornecedor
                  </Description>
                  <Input name="email" autoComplete="off" />
                </Field>
              </div>
            </div>
          </div>
        )}
      </div>
      <Divider className="mt-12 mb-8" />

      <div className="flex justify-end mt-4">
        <Button
          onClick={saveFormData}
          className="hover:bg-[#FF9800] cursor-pointer"
        >
          Salvar Informações
        </Button>
      </div>
    </div>
  );
}
