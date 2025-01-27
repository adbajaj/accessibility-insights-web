// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { shallow } from 'enzyme';
import * as React from 'react';

import { allInstanceOutcomeTypes } from '../../../../../../../DetailsView/reports/components/instance-outcome-type';
import {
    FullRuleDetail,
    FullRuleDetailDeps,
    FullRuleDetailProps,
} from '../../../../../../../DetailsView/reports/components/report-sections/full-rule-detail';
import { RuleResult } from '../../../../../../../scanner/iruleresults';

describe('FullRuleDetail', () => {
    const depsStub = {} as FullRuleDetailDeps;
    const rule = {
        helpUrl: 'url://help.url',
        id: 'rule id',
        description: 'rule description',
        guidanceLinks: [
            {
                href: 'url://guidance-01.link',
                text: 'guidance-01',
            },
            {
                href: 'url://guidance-02.link',
                text: 'guidance-02',
            },
        ],
        nodes: [{} as AxeNodeResult],
    } as RuleResult;

    it.each(allInstanceOutcomeTypes)('renders, outcomeType = %s', outcomeType => {
        const props: FullRuleDetailProps = {
            deps: depsStub,
            rule: rule,
            outcomeType,
        };

        const wrapped = shallow(<FullRuleDetail {...props} />);

        expect(wrapped.getElement()).toMatchSnapshot();
    });
});
