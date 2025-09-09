export interface BuildLinksModel{
    availableDomain : string[],
    isUTMEnable : boolean,
    selectedDomain : string,
    UTM_Param_Object : Record<string, string>,
    domainOptions : any,
    redirectURLError : boolean,
    fullURL : string,
    linkName : string
}