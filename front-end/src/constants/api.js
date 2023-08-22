const devUrl = 'http://localhost:3001/';
const sandboxUrl = '[SANDBOX_URL]';
const prodUrl = '[PRO_URL]';

const BASE_URL = window.location.href.includes('localhost') ? devUrl : 
                                    (window.location.href.includes('sandbox') ? sandboxUrl : prodUrl);

export { BASE_URL };