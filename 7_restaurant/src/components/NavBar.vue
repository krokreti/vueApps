<template>
    <div class="cabecalho">
        <div class="cabecalho-logo"> 
            Cake 
        </div>
        <nav class="cabecalho-navbar">
        <ul>
            <li>
                <!--a href="" class="active">
                    Home
                </a-->
                <router-link to="/" >Home</router-link>
            </li>
            <li>
                <router-link to="/pedidos">Pedidos</router-link>
                <!--a href="">
                    Pedidos
                </a-->
            </li>
            <li>
                <a href="">
                    Contato
                </a>
            </li>
            <li>
                <a href="">
                    Sobre
                </a>
            </li>
        </ul>
        </nav>
        <div class="cabecalho-image"></div>
    </div>

</template>

<script>
export default {
    name: 'NavBar',
}
</script>
