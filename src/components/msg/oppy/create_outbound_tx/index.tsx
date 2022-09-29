import { MsgCreateOutboundTx } from '@src/models';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';

export default function CreateOutboundTx(props: {message: MsgCreateOutboundTx}) {
  const { message } = props;
  const explorer = `https://bscscan.com/tx/${message.outboundTx}`;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateOutboundTx"
        values={{
          explorer,
        }}
      />
    </Typography>
  );
}
