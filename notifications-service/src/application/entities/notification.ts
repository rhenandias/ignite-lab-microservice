import { Replace } from 'src/helpers/replace';
import { Content } from './notification-content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }

  // Recipient Id
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  // Content
  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  // Category
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  // Read At
  public set readAt(date: Date | null | undefined) {
    this.props.readAt = date;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  // Created At
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
