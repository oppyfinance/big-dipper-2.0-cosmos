import { MsgCreateBalancerPool } from '@src/models';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import {
  formatToken, formatNumber,
} from '@utils/format_token';

export default function CreateBalancerPool(props: {message: MsgCreateBalancerPool}) {
  const { message } = props;
  const tokenFormatDenom1 = formatToken(message.token1?.amount, message.token1?.denom);
  const token1 = `${formatNumber(tokenFormatDenom1.value, tokenFormatDenom1.exponent)} ${tokenFormatDenom1.displayDenom.toUpperCase()}`;
  const tokenFormatDenom2 = formatToken(message.token2?.amount, message.token2?.denom);
  const token2 = `${formatNumber(tokenFormatDenom2.value, tokenFormatDenom2.exponent)} ${tokenFormatDenom2.displayDenom.toUpperCase()}`;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateBalancerPool"
        components={[
          (
            <Name
              address={message.creator}
              name={message.creator}
            />
          ),
        ]}
        values={{
          token1,
          token2,
        }}
      />
    </Typography>
  );
}
