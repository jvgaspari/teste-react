const maskContainer = {

  MoneyMask: (num: string) => {
    let result = '';
    if(num.includes('.')){
      if(num.split('.')[1].length === 1){
        const numberValue = num.replace('.', ',');
        result += `${numberValue}0`;
      } else {
        const numberValue = num.replace('.', ',');
        result += `${numberValue}`;
      }
    } else {
      result += `${num},00`;
    }
    return `R$ ${result}`;
  },

}

const Mask = (type: MaskType, value: string) => {
  switch (type) {
    case 'MoneyMask':
    return maskContainer.MoneyMask(value);
  }

}

export type MaskType = 'MoneyMask';

export default Mask;