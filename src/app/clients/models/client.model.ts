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
    alvara: boolean;
    alvaraDataAbertura: string;
    alvaraVencimento: string;
    licencaSanitaria: boolean;
    licencaSanitariaDataAbertura: string;
    licencaSanitariaVencimento: string;
    mapa: boolean;
    mapaDataAbertura: string;
    mapaVencimento: string;
    bombeiros: boolean;
    bombeirosDataAbertura: string;
    bombeirosVencimento: string;
    pgrs: boolean;
    pgrsDataAbertura: string;
    pgrsVencimento: string;
    bpfPop: boolean;
    bpfPopDataAbertura: string;
    bpfPopVencimento: string;
    ambiental: boolean;
    ambientalDataAbertura: string;
    ambientalVencimento: string;
    sonora: boolean;
    sonoraDataAbertura: string;
    sonoraVencimento: string;
    publicidadePropaganda: boolean;
    publicidadePropagandaDataAbertura: string;
    publicidadePropagandaVencimento: string;
    crq: boolean;
    crqDataAbertura: string;
    crqVencimento: string;
    memorialDescritivo: boolean;
    memorialDescritivoFoto: string; //foto base64
    memorialDescritivoDescricao: string;
}