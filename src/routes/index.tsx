import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Blockchain from '../pages/Blockchain';
import Bitcoin from '../pages/Bitcoin';
import Assinatura from '../pages/Assinatura';
import Ethereum from '../pages/Ethereum';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/blockchain" component={Blockchain} />
        <Route path="/bitcoin" component={Bitcoin} />
        <Route path="/ethereum" component={Ethereum} />
        <Route path="/assinatura" component={Assinatura} />
    </Switch>
);

export default Routes;
