/**
 * pokemon controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::pokemon.pokemon', ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params
            const entity = await strapi.db.query('api::pokemon.pokemon').findOne({
                where: { slug: id},
                populate: ['image', 'regions']
            })

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
            return this.transformResponse(sanitizedEntity)
        }
    })
);
