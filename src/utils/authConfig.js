// For a full list of msal.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
export const msalConfig = {
    auth: {
        clientId: "65cd1000-d0d4-42e3-9d26-5f54f3bbb5dc",
        authority: "https://login.microsoftonline.com/organizations",
        //redirectUri: "http://localhost:3000",
        redirectUri: "https://zealous-flower-0a99cd51e.azurestaticapps.net/"
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
}

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "https://mrs-parvez01.microsoft.com/mrs-RDInfra-parvez01",
    resourceScope: "https://mrs-parvez01.microsoft.com/mrs-RDInfra-parvez01/user_impersonation"
}

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const loginRequest = {
    scopes: [apiConfig.resourceScope]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: [apiConfig.resourceScope]
}

// Add here scopes for silent token request
export const silentRequest = {
    scopes: [apiConfig.resourceScope]
}
