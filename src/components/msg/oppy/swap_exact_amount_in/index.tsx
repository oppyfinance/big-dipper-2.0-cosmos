import { MsgSwapExactAmountIn } from '@src/models';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import {
  formatToken, formatNumber,
} from '@utils/format_token';

export default function SwapExactAmountIn(props: {message: MsgSwapExactAmountIn}) {
  const { message } = props;
  const tokenFormatDenomIn = formatToken(message.tokenIn?.amount, message.tokenIn?.denom);
  const tokenIn = `${formatNumber(tokenFormatDenomIn.value, tokenFormatDenomIn.exponent)} ${tokenFormatDenomIn.displayDenom.toUpperCase()}`;
  const tokenFormatDenomOut = formatToken(message.tokenOut?.amount, message.tokenOut?.denom);
  const tokenOut = `${formatNumber(tokenFormatDenomOut.value, tokenFormatDenomOut.exponent)} ${tokenFormatDenomOut.displayDenom.toUpperCase()}`;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSwapExactAmountIn"
        components={[
          (
            <Name
              address={message.sender}
              name={message.sender}
            />
          ),
        ]}
        values={{
          tokenIn,
          tokenOut,
        }}
      />
    </Typography>
  );
}
