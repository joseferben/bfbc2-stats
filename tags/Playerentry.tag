import action from '../src/actions/Actions';
import Stats from '../server/Stats';

<Playerentry>
    <li><span><a onclick={ loadPlayer } href="/#players/{ id }">{ server } - { name }</a></span></li>
    <script>
        this.server = Stats.getServers()[Stats._stripServerId(this.id)];
    </script>
</Playerentry>
