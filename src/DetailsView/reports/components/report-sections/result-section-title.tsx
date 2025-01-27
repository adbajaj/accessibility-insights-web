// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as React from 'react';

import { NamedSFC } from '../../../../common/react/named-sfc';
import { InstanceOutcomeType } from '../instance-outcome-type';
import { OutcomeChip } from '../outcome-chip';

export type ResultSectionTitleProps = {
    title: string;
    badgeCount: number;
    outcomeType: InstanceOutcomeType;
};

export const ResultSectionTitle = NamedSFC<ResultSectionTitleProps>('ResultSectionTitle', props => {
    return (
        <div className="result-section-title">
            <div className="screen-reader-only">
                {props.title} {props.badgeCount}
            </div>
            <span className="title" aria-hidden="true">
                {props.title}
            </span>
            <div aria-hidden="true">
                <OutcomeChip outcomeType={props.outcomeType} count={props.badgeCount} />
            </div>
        </div>
    );
});
