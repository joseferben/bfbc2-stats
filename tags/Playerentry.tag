import action from '../src/actions/Actions';
import Stats from '../server/Stats';

<Playerentry>
    <li><span><a onclick={ loadPlayer } href="/#players/{ id }">{ server } - { name }</a></span></li>
    <script>
        const servers = ['EA', 'Nexus', 'DU4'];
        this.server = servers[Stats._stripServerId(this.id)];
    </script>
</Playerentry>
