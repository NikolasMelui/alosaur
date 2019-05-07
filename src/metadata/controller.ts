export class ControllerMetadata {
  actions: [];
  target: Function;
  route: string;

  constructor(args: any) {
    this.target = args.target;
    this.route = args.route;
  }
}

/**
 * Controller metadata used to storage information about registered controller.
 */
export interface ControllerMetadataArgs {

  /**
   * Indicates object which is used by this controller.
   */
  target: Function;

  /**
   * Base route for all actions registered in this controller.
   */
  route: string;
  /**
   * Type, vase default
   */
  type: any;
}