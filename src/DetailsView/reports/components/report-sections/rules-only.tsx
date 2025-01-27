// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as React from 'react';

import { NamedSFC } from '../../../../common/react/named-sfc';
import { RuleResult } from '../../../../scanner/iruleresults';
import { InstanceOutcomeType } from '../instance-outcome-type';
import { FullRuleDetail, FullRuleDetailDeps } from './full-rule-detail';

export type RulesDeps = FullRuleDetailDeps;

export type RulesProps = {
    deps: RulesDeps;
    rules: RuleResult[];
    outcomeType: InstanceOutcomeType;
};

export const RulesOnly = NamedSFC<RulesProps>('RulesOnly', ({ rules, outcomeType, deps }) => {
    return (
        <div className="rule-details-group">
            {rules.map(rule => {
                return <FullRuleDetail deps={deps} key={rule.id} rule={rule} outcomeType={outcomeType} />;
            })}
        </div>
    );
});
