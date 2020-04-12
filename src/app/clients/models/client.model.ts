export interface Client {
    id: string;
    socialName: string;
    cnpj: string;
    partner1: string;
    partner2: string;
    partner3: string;
    address: string;
    district: string;
    city: string;
    state: string;
    complement: string;
    dap: string;
    phone: string;
    nameResponsiblePerson: string; //responsavel legal
    cpfResponsible: string;
    nameTechnicalManager: string;
    logo: string; //converter foto para base64
    enabled: boolean;
}