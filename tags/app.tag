import Navigation from './Navigation.tag'; import Statsbox from './Statsbox.tag'; import Playerstatstable from './Playerstatstable.tag'; import FakeResponsePlayer from '../fake-response-player.json'; import FakeSuggestion from '../fake-suggestions.json' import PlayerSuggestionsStore from '../src/stores/PlayerSuggestionsStore'; import actions from '../src/actions/Actions';

<App>
    <Navigation data={ this.suggestiondata }></Navigation>
    <Statsbox data={ this.data }></Statsbox>
    <Playerstatstable data={ this.data }></Playerstatstable>
    <footer class="footer">
        <div class="container">
            <span>
          by <a href="http://www.du4-gaming.com">DU4</a>
          </span>
        </div>
    </footer>
    <script>
        this.data = FakeResponsePlayer;

        this.suggestionStore = new PlayerSuggestionsStore();

        this.suggestionStore.__emitter.addListener('change', () => {
            this.suggestiondata = this.suggestionStore.getState();
            riot.update();
        });
    </script>
</App>
