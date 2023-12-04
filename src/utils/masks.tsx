export const maskPhone = (text: string) => {
  let mask = text.replace(/\D/g, '');
  mask = mask.replace(/^(\d{2})(\d)/g, '($1) $2');
  if (mask.length === 14) {
    mask = mask.replace(/(\d)(\d{4})$/, '$1-$2');
  } else if (mask.length === 13) {
    mask = mask.replace(/(\d)(\d{3})$/, '$1-$2');
  } else if (mask.length === 12) {
    mask = mask.replace(/(\d)(\d{2})$/, '$1-$2');
  } else if (mask.length === 11) {
    mask = mask.replace(/(\d)(\d{1})$/, '$1-$2');
  }
  return mask;
};

export const maskDocument = (text: string) => {
  let mask = text.replace(/\D/g, '');
  mask = mask.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  if (mask.length >= 10) {
    mask = mask.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  } else if (mask.length >= 7) {
    mask = mask.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
  } else if (mask.length >= 4) {
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
  }
  return mask;
};

export const maskDate = (text: string) => {
  let mask = text.replace(/\D/g, '');
  mask = mask.replace(/^(\d{2})(\d{2})(\d{4})/g, '$1/$2/$3');
  if (mask.length >= 5) {
    mask = mask.replace(/(\d{2})(\d{2})(\d)/, '$1/$2/$3');
  } else if (mask.length >= 3) {
    mask = mask.replace(/(\d{2})(\d)/, '$1/$2');
  }
  return mask;
};

export const maskOnlyNumbers = (text: string) => {
  return text.replace(/\D/g, '');
};

export const maskZipCode = (text: string) => {
  let mask = text.replace(/\D/g, '');
  mask = mask.replace(/^(\d{5})(\d{3})/g, '$1-$2');
  return mask;
};

export const maskExpiredCreditCardDate = (text: string) => {
  let formattedText = text.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

  if (formattedText.length > 4) {
    formattedText = formattedText.slice(0, 4); // Limita para 4 dígitos
  }

  if (formattedText.length > 2) {
    formattedText = formattedText.replace(/(\d{2})(\d{2})/, '$1/$2'); // Insere a barra (/) após os primeiros 2 dígitos
  }

  return formattedText;
};

export const maskCreditCardNumber = (text: string) => {
  let formattedText = text.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
  if (formattedText.length > 16) {
    formattedText = formattedText.slice(0, 16); // Limita para 16 dígitos
  }

  return formattedText;
};

export const empty = (value: any) => {
  if (!Array.isArray(value)) {
    if (Object.keys(value).length === 0) {
      return true;
    }
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return true;
    }
  }

  if (typeof value === 'string') {
    if (value.length === 0) {
      return true;
    }
  }

  if (!value) {
    return true;
  }

  return false;
};

export function formatNumber(input: string) {
  // Replace the comma with an empty string to remove it
  input = input?.replace('.', '');

  // Replace the period with a comma
  input = input?.replace(',', '.');

  return input;
}

export const maskLetters = (text: string) => {
  return text.replace(/[^ A-Za-zÀ-ÖØ-öø-ÿ]/g, '');
};
