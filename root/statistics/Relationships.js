/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import React from 'react';

import {compare} from '../static/scripts/common/i18n';
import {l_relationships} from '../static/scripts/common/i18n/relationships';
import {l_statistics as l} from '../static/scripts/common/i18n/statistics';
import {withCatalystContext} from '../context';
import formatEntityTypeName from '../static/scripts/common/utility/formatEntityTypeName';

import {formatCount, formatPercentage} from './utilities';
import StatisticsLayout from './StatisticsLayout';

export type RelationshipsStatsT = {|
  +$c: CatalystContextT,
  +dateCollected: string,
  +stats: {[string]: number},
  +types: {[string]: RelationshipTypeT},
|};

declare type RelationshipTypeT = {|
  +entity_types: $ReadOnlyArray<string>,
  +tree: {[string]: Array<LinkTypeT>},
|};

function comparePhrases(a, b) {
  return compare(
    l_relationships(a.long_link_phrase),
    l_relationships(b.long_link_phrase),
  );
}

const TypeRows = withCatalystContext(({
  $c,
  base,
  indent,
  parent,
  stats,
  type,
}) => {
  return (
    <>
      <tr>
        <th style={{paddingLeft: (indent - 1) + 'em'}}>{l_relationships(type.long_link_phrase)}</th>
        <td>{formatCount($c, stats[base + '.' + type.name])}</td>
        <td>{formatCount($c, stats[base + '.' + type.name + '.inclusive'])}</td>
        <td>{formatPercentage($c, stats[base + '.' + type.name + '.inclusive'] / stats[parent], 1)}</td>
      </tr>
      {type.children ? (
        type.children.sort(comparePhrases).map((child) => (
          <TypeRows
            base={base}
            indent={indent + 1}
            key={child.id}
            parent={base + '.' + type.name + '.inclusive'}
            stats={stats}
            type={child}
          />
        ))
      ) : null}
    </>
  );
});

const Relationships = ({
  $c,
  dateCollected,
  stats,
  types,
}: RelationshipsStatsT) => (
  <StatisticsLayout fullWidth page="relationships" title={l('Relationships')}>
    <p>
      {l('Last updated: {date}', {date: dateCollected})}
    </p>
    <h2>{l('Relationships')}</h2>
    {stats['count.ar.links'] < 1 ? (
      <p>
        {l('No relationship statistics available.')}
      </p>
    ) : (
      <table className="database-statistics">
        <tbody>
          <tr className="thead">
            <th />
            <th>{l('Exclusive')}</th>
            <th>{l('Inclusive')}</th>
            <th />
          </tr>
          <tr>
            <th>{l('Relationships:')}</th>
            <td />
            <td>{formatCount($c, stats['count.ar.links'])}</td>
            <td />
          </tr>
          {Object.keys(types).sort().map((typeKey) => {
            const type = types[typeKey];
            const type0 = formatEntityTypeName(type.entity_types[0]);
            const type1 = formatEntityTypeName(type.entity_types[1]);
            return (
              <>
                <tr className="thead">
                  <th colSpan="4">
                    {l('{type0}-{type1}', {type0: type0, type1: type1})}
                  </th>
                </tr>
                <tr>
                  <th colSpan="2">
                    {l(
                      '{type0}-{type1} relationships:',
                      {type0: type0, type1: type1},
                    )}
                  </th>
                  <td>
                    {formatCount($c, stats['count.ar.links.' + typeKey])}
                  </td>
                  <td>
                    {formatPercentage(
                      $c,
                      stats['count.ar.links.' + typeKey] / stats['count.ar.links'],
                      1,
                    )}
                  </td>
                </tr>
                {Object.keys(type.tree).sort().map((child) => (
                  type.tree[child].sort(comparePhrases).map((child2) => (
                    <TypeRows
                      base={'count.ar.links.' + typeKey}
                      indent={2}
                      key={child2.id}
                      parent={'count.ar.links.' + typeKey}
                      stats={stats}
                      type={child2}
                    />
                  ))
                ))}
              </>
            );
          })}
        </tbody>
      </table>
    )}
  </StatisticsLayout>
);

export default withCatalystContext(Relationships);