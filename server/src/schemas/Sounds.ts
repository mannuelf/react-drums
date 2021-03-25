import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Sound {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  audio: string;

  @Field()
  keyCode: number;

  @Field()
  keyChar: string;
}

@InputType()
export class SoundInput implements Partial<Sound> {
  @Field()
  name: string;

  @Field()
  audio: string;

  @Field()
  keyCode: number;

  @Field()
  keyChar: string;
}
