import Weapon from './Weapon.tag';

<Playerstatstable>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>weapon</th>
                            <th>kills</th>
                            <th>deaths</th>
                            <th>hs</th>
                        </tr>            
                    </thead>
                    <tbody>
                        <tr each={ weapon in this.weapons } data-is="weapon"></tr>
                    </tbody>
                    <script>
                        // TODO(Use the data accessible in opts.data to feed the weapon components by adjusting the markup above)
                        // Hint: you can use console.log(opts.data) like below to print the data to the console

                        //TODO(get the array of weapons out of opts.data and save it as this.weapons so it can get consumed by the weapon tag)
                        this.weapons = opts.data.weapons;
                        console.log(this.weapons);    

                    </script>
                </table>
            </div>
        </div>
    </div>
</Playerstatstable>
