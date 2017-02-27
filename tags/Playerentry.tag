import action from '../src/actions/Actions';

<Playerentry>
    <li><span><a onclick={ loadPlayer } href="#">{ name }</a></span></li>
    <script>
        this.loadPlayer = (evt) => {
            action.loadPlayer(evt.item.id);
        };
    </script>
</Playerentry>
