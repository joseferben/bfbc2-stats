import action from '../src/actions/Actions';
import route from 'riot-route';

<Playerentry>
    <li><span><a onclick={ loadPlayer } href="/#players/{ id }">{ name }</a></span></li>
    <script>
        this.loadPlayer = (evt) => {
            route(`players/${evt.item.id}`);
        };
     console.log(this);
    </script>
</Playerentry>
