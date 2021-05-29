<template>
    <header class="conatainer add-city">
        <nav>
            <span>Add City</span>
            <div class="right">
                <i class="far fa-edit"></i>
                <i class="fas fa-sync"></i>
                <i class="fas fa-plus"></i>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name:"Nevigation",
};
</script>

<style lang = "scss" scoped>
    .add-city {
        background-color: #312645;
}
    header{
        nav {
            display: flex;
            color: #fff;
            padding: 30px 0;
            justify-content: space-between;
        }

        .right {
            i {
                font-size: 20px;
            }
            i:nth-child(2),
            i:nth-child(3) {
                margin-left: 20px ;
            }
        }
    }
    span {
        font-weight: 600;
    }
</style>