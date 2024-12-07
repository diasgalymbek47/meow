<script setup>
import HeaderMusic from "../components/HeaderMusic.vue";
import MusicMain from "@/components/MusicMain.vue";
</script>

<template>
    <div class="container">
        <div class="upper-container">
            <HeaderMusic />
            <MusicMain />
        </div>
        <div class="lower-container">
            <div class="new-relise_line">
                <a href="#">
                    <div>Новые релизы</div>
                    <span>Новые треки, альбомы и сборники</span>
                </a>
                <div class="albums-line">
                    <div class="wrap-album">
                        <div class="album-img">
                            <img src="../components/music-images/OneOne-Yenlik.jpeg">
                        </div>
                        <div class="album-info">
                            <h4>One One</h4>
                            <p>Yenlik, De lacure</p>
                            <span>2024 - сингл</span>
                        </div>
                    </div>
                    <div class="wrap-album">
                        <div class="album-img">
                            <img src="../components/music-images/OneOne-Yenlik.jpeg">
                        </div>
                        <div class="album-info">
                            <h4>One One</h4>
                            <p>Yenlik, De lacure</p>
                            <span>2024 - сингл</span>
                        </div>
                    </div>
                    <div class="wrap-album">
                        <div class="album-img">
                            <img src="../components/music-images/OneOne-Yenlik.jpeg">
                        </div>
                        <div class="album-info">
                            <h4>One One</h4>
                            <p>Yenlik, De lacure</p>
                            <span>2024 - сингл</span>
                        </div>
                    </div>
                    <div class="wrap-album">
                        <div class="album-img">
                            <img src="../components/music-images/OneOne-Yenlik.jpeg">
                        </div>
                        <div class="album-info">
                            <h4>One One</h4>
                            <p>Yenlik, De lacure</p>
                            <span>2024 - сингл</span>
                        </div>
                    </div>
                    <div class="wrap-album">
                    <div class="album-img">
                        <img src="../components/music-images/OneOne-Yenlik.jpeg">
                    </div>
                    <div class="album-info">
                        <h4>One One</h4>
                        <p>Yenlik, De lacure</p>
                        <span>2024 - сингл</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* Upper container MAIN */
.upper-container {
    opacity: 0;
    padding-bottom: 46px;
    border-radius: 0 0 50px 50px;
    transform: translateY(-20px);
    animation: fadeIn 0.5s ease-out forwards;
    background: url(../components/images/musicbg-img.png) no-repeat;
}

/* Lower Container */
.lower-container {
    width: 100%;
    margin-top: 50px;
    padding: 2em 2.5em 0.5em;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    background-color: #ffffff25;
    box-shadow: 0px 4px 20px -4px rgba(0, 0, 0, 25%);
}

.new-relise_line {}

.new-relise_line a {
    text-align: left;
    color: #000;
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
}

.new-relise_line a div {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
}

.new-relise_line a span {
    display: block;
    color: #777;
}

/* album */
.albums-line {
    display: flex;
    justify-content: space-between;
}

.wrap-album {
    width: 200px;
    height: 270px;
    margin: 5px;
    padding: 10px;
}

.album-img {
    aspect-ratio: 1/1;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}

.wrap-album img {
    width: 100%;
}

.album-info {
    background-color: #829b142a;
    border-radius: 10px;
    padding: 4px;
    text-align: left;
}

.album-info h4 {}

.album-info p {
    color: #777;
    margin-top: 4px;
    font-size: 14px;
}

.album-info span {
    font-size: 12px;
    display: block;
    margin-top: 4px;
    color: #777;
}



@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
