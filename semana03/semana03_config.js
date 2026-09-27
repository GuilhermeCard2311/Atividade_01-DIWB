export const config = {
    env: 'development'
};
//O erro ocorre porque o Node.js em modo "module" exige a extensão do arquivo na importação, e para corrigir basta trocar ./config por ./config.js.