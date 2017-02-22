import Playerentry from './Playerentry.tag'; import action from '../src/actions/Actions';

<Navigation>
    <nav class="fix-margin navbar navbar-inverse navbar-static-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand glyphicon glyphicon-home" href="http://www.du4-gaming.com/"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Summary</a></li>
                </ul>
                <form id="playersearch" class="navbar-form navbar-right">
                    <div class="input-group" id="adv-search">
                        <input type="text" class="form-control" name="name" oninput={ handleSearchInput } placeholder="Search for player">
                        <div class="input-group-btn">
                            <div class="btn-group" role="group">
                                <div class="dropdown dropdown-lg open">
                                    <div class="player-suggestions dropdown-menu dropdown-menu-right" role="menu">
                                        <ul class="player-list">
                                            <Playerentry each={ this.players }></Playerentry>
                                        </ul>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EA <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">DU4</a></li>
                            <li><a href="#">Nexus</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
    <script>
        this.handleSearchInput = (evt) => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => action.searchPlayer(evt.target.value), 500);
        }
        this.players = opts.data.suggestions;
        console.log(this.players)
    </script>
</Navigation>
