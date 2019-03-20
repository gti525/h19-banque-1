<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Banquo Uno</div>
            <div class="transfer-container">
                <div class="main-header">
                    <h2>Paiement de la carte de crédit</h2>
                </div>
                <div class="form-group">
                    <label for="receiveraccountno">Numéro du compte de destination</label>
                    <input
                            id="receiveraccountno"
                            type="number"
                            min="0"
                            v-model="receiveraccountno"
                            name="receiveraccountno"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !receiveraccountno }"
                    >
                </div>
                <div class="form-group">
                    <label for="amount">Montant</label>
                    <input
                            id="amount"
                            type="number"
                            min="0.01"
                            step="0.01"
                            v-model="amount"
                            name="amount"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !amount }"
                    >
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="paymentBtnClicked" class="btn btn-primary btn-common float-right">Payer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreditCardPayment"
    }
</script>

<style scoped>

</style>
