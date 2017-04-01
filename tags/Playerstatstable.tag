import Weapon from './Weapon.tag';
import actions from '../src/actions/Actions';

<Playerstatstable>
    <div if={opts.data.length> 0} class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th><span onclick={ sortTable } value="label">weapon<span></th>
                            <th><span onclick={ sortTable } value="kills">kills<span></th>
                            <th><span onclick={ sortTable } value="deaths">deaths<span></th>
                            <th><span onclick={ sortTable } value="hs">hs<span></th>
                            <th><span onclick={ sortTable } value="kills-deaths">kd<span></th>
                            <th><span onclick={ sortTable } value="hs-kills">hs/k<span></th>
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
         actions.sortWeaponStats(evt.srcElement.attributes[0].value);
     }
    </script>
</Playerstatstable>
