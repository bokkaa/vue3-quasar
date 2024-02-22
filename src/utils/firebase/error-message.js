import ERROR_CODE_JSON from './error-code.json';

export const getErrorMessage = code =>
  // ERROR_CODE_JSON에서 [code]와 같은것을 찾음
  ERROR_CODE_JSON[code] || `관리자에게 문의해주세요. (${code})`;
