import Infobox from './Infobox.tag';

<GlobalStats>
    <div class="container">
        <h2>Global stats</h2>
        <div class="row">
            <div class="col-md-4 col-sm-4">
                <Infobox label="total # kills" value="{ opts.data.kills }"></Infobox>
            </div>
            <div class="col-md-4 col-sm-4">
                <Infobox label="total # hs" value="{ opts.data.hs }"></Infobox>
            </div>
            <div class="col-md-4 col-sm-4">
                <Infobox label="total # players" value="{ opts.data.players }"></Infobox>
            </div>
        </div>

    </div>
</GlobalStats>
