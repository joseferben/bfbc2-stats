import Playerentry from './Playerentry.tag';
import Spinner from './Spinner.tag';
import action from '../src/actions/Actions';

<Navigation>
    <nav class="fix-margin navbar navbar-inverse navbar-static-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand glyphicon glyphicon-home" href="http://www.du4-gaming.com/"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                </ul>
                <form id="playersearch" autocomplete="off" class="navbar-form navbar-right" >
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" oninput={ handleSearchInput } placeholder="Search for player">
                        <div class="dropdown dropdown-lg { opts.data.suggestions.length > 0 || opts.data.loading ? 'open': '' }">
                            <div class="player-suggestions dropdown-menu dropdown-menu-right" role="menu">
                                <ul class="player-list">
                                    <div if={ opts.data.loading }>
                                        <Spinner></Spinner>
                                    </div>
                                    <Playerentry each={ opts.data.suggestions }></Playerentry>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
                </ul>
            </div>
        </div>
        </div>
    </nav>
    <script>
        this.handleSearchInput = (evt) => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => action.searchPlayer(evt.target.value), 100);
        }
    </script>
</Navigation>
