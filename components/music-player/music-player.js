export function renderMusicPlayer() {
  return `
        <!-- Sección de Reproductor de musica -->
        <section style="box-shadow: 0 0 25px #000;" class="section-container element" id="music-section">
            <div class="music-player">
                <div class="now-playing invert">
                    <div class="album-art">
                        <img loading="lazy" class="shadow-invert" alt="portada de cancion" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop">
                        <div class="vinyl-effect"></div>
                    </div>
                    
                    <div class="track-info">
                        <h3 id="currentTrack">Chill Vibes - Lofi Beats</h3>
                        <p id="currentArtist">Snow Contrast Studio</p>
                        <div class="progress-container">
                            <span id="currentTime">0:42</span>
                            <div class="progress-bar" id="progressBar">
                                <div class="progress" id="progress"></div>
                            </div>
                            <span id="duration">3:45</span>
                        </div>
                    </div>
                </div>
                
                <div class="player-controls">
                    <button class="control-btn" id="prevBtn">
                        <span class="material-symbols-outlined">skip_previous</span>
                    </button>
                    <button class="control-btn play-btn shadow" id="playBtn">
                        <span class="material-symbols-outlined" id="playIcon">play_arrow</span>
                    </button>
                    <button class="control-btn" id="nextBtn">
                        <span class="material-symbols-outlined">skip_next</span>
                    </button>
                    
                    <div class="volume-control">
                        <span class="material-symbols-outlined">volume_up</span>
                        <input type="range" min="0" max="100" value="70" class="element volume-slider" id="volumeSlider">
                    </div>
                </div>
                
                <div class="playlist element">
                    <h2><span class="material-symbols-outlined">queue_music</span> Playlist</h2>
                    <div class="playlist-tracks">
                        <div class="track active shadow" data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
                            <span class="track-number">1</span>
                            <div class="track-details">
                                <h3>Creative Flow</h3>
                                <p>Lofi Study Beats • 3:24</p>
                            </div>
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                        
                        <div class="track shadow" data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3">
                            <span class="track-number">2</span>
                            <div class="track-details">
                                <h3>Design Dreams</h3>
                                <p>Ambient Focus • 4:12</p>
                            </div>
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                        
                        <div class="track shadow" data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3">
                            <span class="track-number">3</span>
                            <div class="track-details">
                                <h3>Color Waves</h3>
                                <p>Chillhop • 3:45</p>
                            </div>
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                        
                        <div class="track shadow" data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3">
                            <span class="track-number">4</span>
                            <div class="track-details">
                                <h3>Pixel Perfect</h3>
                                <p>Jazz Lofi • 3:58</p>
                            </div>
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
