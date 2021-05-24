import { ResponsivePie } from '@nivo/pie';
import React, { memo } from 'react';
import { useAccountBalanceContext } from '..';

export const StatementChart = () => {
  const { accountTotal, totalWithdrawn } = useAccountBalanceContext();
  const data = [
    {
      id: 'Entradas',
      label: 'Entradas',
      value: accountTotal?.toFixed(2),
      color: 'hsl(246, 70%, 50%)',
    },
    {
      id: 'Saídas',
      label: 'Saídas',
      value: totalWithdrawn?.toFixed(2),
      color: 'hsl(150, 70%, 50%)',
    },
  ];
  return (
    <>
      <h2 className="text-center">Entradas e saídas</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        valueFormat={(number) => String(number).replace('.', ',') + ' R$'}
        colors={{ scheme: 'accent' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [['brighter', 0]] }}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 10]] }}
        theme={{
          tooltip: { container: { color: 'white', background: '#212121' } },
          legends: { text: { color: 'white', fill: null as any } },
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 40,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: 'white',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
          },
        ]}
      />
    </>
  );
};
