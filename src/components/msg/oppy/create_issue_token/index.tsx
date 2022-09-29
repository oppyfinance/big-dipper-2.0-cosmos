import { MsgCreateIssueToken } from '@src/models';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import {
  formatToken, formatNumber,
} from '@utils/format_token';

export default function CreateIssueToken(props: {message: MsgCreateIssueToken}) {
  const { message } = props;
  const tokenFormatDenom = formatToken(message.token?.amount, message.token?.denom);
  const token = `${formatNumber(tokenFormatDenom.value, tokenFormatDenom.exponent)} ${tokenFormatDenom.displayDenom.toUpperCase()}`;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateIssueToken"
        components={[
          (
            <Name
              address={message.receiver}
              name={message.receiver}
            />
          ),
        ]}
        values={{
          token,
        }}
      />
    </Typography>
  );
}
