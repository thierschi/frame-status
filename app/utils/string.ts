import _ from 'lodash';

export function getUserInitials(name: string | undefined | null): string {
    if (_.isUndefined(name) || _.isNull(name) || name.length === 0) {
        return '--';
    }

    const allNames = name.trim().split(' ');
    const initials = allNames.reduce((acc, curr, index) => {
        if (index === 0 || index === allNames.length - 1) {
            acc = `${acc}${curr.charAt(0).toUpperCase()}`;
        }
        return acc;
    }, '');

    return initials;
}
