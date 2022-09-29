import { MsgCreatePool } from '@src/models';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';

export default function CreatePool(props: {message: MsgCreatePool}) {
  const { message } = props;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreatePool"
        components={[
          (
            <Name
              address={message.creator}
              name={message.creator}
            />
          ),
        ]}
      />
    </Typography>
  );
}
