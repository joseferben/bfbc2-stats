import route from 'riot-route';
import Navigation from './Navigation.tag';
import Statsbox from './Statsbox.tag';
import Playerstatstable from './Playerstatstable.tag';
import FakeResponsePlayer from '../fake-response-player.json';
import FakeSuggestion from '../fake-suggestions.json';
import PlayerSuggestionsStore from '../src/stores/PlayerSuggestionsStore';
import PlayerStore from '../src/stores/PlayerStore';
import actions from '../src/actions/Actions';

<App>
    <Navigation data={ this.suggestionData }></Navigation>
    <Statsbox data={ this.overallData }></Statsbox>
    <Playerstatstable data={ this.weaponsData }></Playerstatstable>
    <div if={ this.loading }>
        <Spinner></Spinner>
    </div>

    <footer class="footer">
        <div class="container">
            <span>
          by <a href="http://www.du4-gaming.com">DU4</a>
          </span>
        </div>
    </footer>
    <script>
        route.stop();
        route.start();

        this.loading = false;
        this.suggestionStore = new PlayerSuggestionsStore();
        this.suggestionData = this.suggestionStore.getState();

        this.playerStore = new PlayerStore();
        this.weaponsData = this.playerStore.getState().weapons;
        this.overallData = this.playerStore.getState().overall;

        this.suggestionStore.__emitter.addListener('change', () => {
            this.suggestionData = this.suggestionStore.getState();
            this.update();
        });

        this.playerStore.__emitter.addListener('change', () => {
            this.loading = this.playerStore.getState().loading;
            this.weaponsData = this.playerStore.getState().weapons;
            this.overallData = this.playerStore.getState().overall;
            this.update();
        });
     
        route('/players/*', (id) => {
            console.log(`url changed to id: ${id}`);
            actions.loadPlayer(id);
        });

    </script>
</App>
