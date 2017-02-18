import Navigation from './Navigation.tag';
import Statsbox from './Statsbox.tag';
import Playerstatstable from './Playerstatstable.tag';
import FakeResponse from '../fake-response.json';

<App>
	<Navigation></Navigation>
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
   this.data = FakeResponse;
	</script>
</App>
