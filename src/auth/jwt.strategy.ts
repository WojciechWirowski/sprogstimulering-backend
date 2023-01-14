import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "U634iP5ogPy%U1UeFHUj5$cb%YrLm$FexzhEpVxQ8hX8zvnL",
        });
    }

    async validate(payload: any) {
        return {
            userId: payload.sub, username: payload.username
        }
    }
}