   const Tax_Amount =30;

     // function expression define
     const shopping = function(amount) {

      const DISCOUNT_AMOUNT = 40;
        // Arrow function
        const calculation = () => {
            return amount + Tax_Amount;
        }

        // function declaration
        function getDiscountAmount(){
            return DISCOUNT_AMOUNT;
        }

        const total = calculation() - getDiscountAmount();
        return total;

     }

     // Invoking the function
     const billAmount = shopping(100);// ?

     console.log(`Bill amount = ${billAmount}`);

     //points to be note
     //1. we can't access any value from the function
     //2. we can access outer variable in the function


     function shoppingDetails(amount){
        const DISCOUNT_AMOUNT = 25;

        function calculationTaxAmount() {
            const taxAmount = amount + Tax_Amount;
            return taxAmount;
        }

        function getDiscountAmount(){
            const total = calculationTaxAmount();
            const amountWithDiscount = total - DISCOUNT_AMOUNT;
            return amountWithDiscount;
        }

        const actuallBill = getDiscountAmount();
        return{
            amount: amount,
            billAmount: actuallBill,
            discount: DISCOUNT_AMOUNT,
            amountWithTax: calculationTaxAmount()  // hear we invoked the function
        }

     }
     const userAmount = 456;
const detail = shoppingDetails(userAmount);
console.log(detail);