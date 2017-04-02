import Infobox from './Infobox.tag';
import GlobalStats from './GlobalStats.tag';
import Spinner from './Spinner.tag';

<Statsbox>
    <div class="jumbotron">
        <div if={ opts.loading || opts.overview.loading}>
            <Spinner></Spinner>
        </div>
        <div if={opts.data.name == null && opts.loading == false} class="container">
            <GlobalStats data={ opts.overview.overview }></GlobalStats>
        </div>
        <div if={opts.data.name != null} class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="player-name-box">
                        <p class="player-name">{ opts.data.name }</p>
                    </div>
                </div>
            </div>
        </div>
        <div if={opts.data.score != null} class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <Infobox label="total score" value="{ opts.data.score }"></Infobox>
                </div>
                <div class="col-md-4 col-sm-4">
                    <Infobox label="# kills" value="{ opts.data.kills }"></Infobox>
                </div>
                <div class="col-md-4 col-sm-4">
                    <Infobox label="# deaths" value="{ opts.data.deaths }"></Infobox>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <Infobox label="# hs" value="{ opts.data.hs }"></Infobox>
                </div>
                <div class="col-md-4 col-sm-4">
                    <Infobox label="# seconds" value="{ opts.data.seconds }"></Infobox>
                </div>
                <div class="col-md-4 col-sm-4">
                    <Infobox label="# connections" value="{ opts.data.connections }"></Infobox>
                </div>
            </div>
        </div>
    </div>
    <script>
    </script>
</Statsbox>
