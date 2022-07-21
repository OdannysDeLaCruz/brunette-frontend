<template>
    <div class="error-page">
        <span class="error-page__code">404</span>
        <p class="error-page__message">Page Not Found</p> 
    </div>
</template>
<style lang="scss" scoped>
.error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
}
.error-page__code {
    font-size: 150px;
    color: #fed488;
    font-family: sans-serif;
    font-weight: bold;
}
.error-page__message {
    font-size: 16px;
    color: #000;
}
</style>