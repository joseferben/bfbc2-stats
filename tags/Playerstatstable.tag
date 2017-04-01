import Weapon from './Weapon.tag';
import actions from '../src/actions/Actions';

<Playerstatstable>
    <div if={opts.data.length> 0} class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th><span onclick={ sortTable }>weapon<span></th>
                            <th><span onclick={ sortTable }>kills<span></th>
                            <th><span onclick={ sortTable }>deaths<span></th>
                            <th><span onclick={ sortTable }>hs<span></th>
                            <th><span onclick={ sortTable }>kd<span>k/d</th>
                            <th><span onclick={ sortTable }>hsk<span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr each={ weapon in opts.data } data-is="weapon"></tr>
                    </tbody>
                    <script>
                    </script>
                </table>
            </div>
        </div>
    </div>
    <script>
     this.sortTable = function(evt) {
         actions.sortWeaponStats(evt.srcElement.textContent);
     }
    </script>
</Playerstatstable>
