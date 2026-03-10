
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name }) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Thanks for joining n8nGalaxy. We&apos;re excited to have you on board.</p>
  </div>
);
